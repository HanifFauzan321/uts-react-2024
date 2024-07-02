import { useState } from "react";
import { Trash, SquarePen } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { List } from "lucide-react";
import { AlignVerticalSpaceAroundIcon } from "lucide-react";
import { Info } from "lucide-react";

let initialProducts = [
  {
    id: 1,
    name: "Frozen",
    duration: 120,
    image:
      "https://tse4.mm.bing.net/th?id=OIP.umm7papnieDYkn95pgJVIgHaEo&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Spiderman",
    duration: 90,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.CCqoXq2zh9yXjo6LYQbusQAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Mario Bross",
    duration: 120,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.fxDUMakGNNPNmwP_sysnwwHaLZ&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Sonic",
    duration: 75,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.pkKY6gUnq5iWygMuyf6ncwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "One Piece",
    duration: 110,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.ZensBZxyAJTAuR7qeFpsiwHaEK&pid=Api&P=0&h=180",
  },
];

const savedSorted = localStorage.getItem("film");

export default function Film() {
  const [film, setFilm] = useState(
    savedSorted ? JSON.parse(savedSorted) : initialProducts
  );
  const [updateFilm, setUpdateFilm] = useState(null);
  const [addFilm, setAddFilm] = useState(null);
  const [orderBy, setOrderBy] = useState("asc");
  const [sortBy, setSortBy] = useState("id");
  const [search, setSearch] = useState("");

  const showInfo = (data) => {
    alert(` Name          : ${data.name} \n Duration            : ${data.duration} minute`);
  }

  const filterData = film
    .sort((a, b) => {
      if (orderBy === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    });

  function handleDelete(data) {
    if (window.confirm("Apakah kamu yakin hapus ini?")) {
      setFilm(film.filter((p) => p.id !== data.id));
    }
  }

  function handleUpdate() {
    setFilm(film.map((a) => (a.id === updateFilm.id ? updateFilm : a)));
    setUpdateFilm(null);
    console.log(setUpdateFilm);
  }

  function handleNewFilm() {
    const newId = film.length > 0 ? Math.max(...film.map((p) => p.id)) + 1 : 1;
    setFilm([...film, { ...addFilm, id: newId }]);
    setAddFilm(null);
  }

  useEffect(() => {
    localStorage.setItem("film", JSON.stringify(film));
  }),
    [film];

  return (
    <div className="w-full h-full full bg-white">
      <div className="flex w-full items-center p-3">
        <div className="p-3 flex w-1/4 gap-2 justify-center">
          <button
            className="flex rounded-md bg-green-300 px-3"
            onClick={() => setAddFilm(film)}
          >
            <Plus />
            Add
          </button>
        </div>
        <div className="p-3 flex w-2/4 gap-2 justify-center bg-slate-200">
          <Search />
          <input
            type="text"
            className="bg-transparent"
            placeholder={"Search"}
            value={search}
            onChange={(x) => setSearch(x.target.value)}
          />
        </div>
        <label htmlFor="">
          <List className="m-auto" />
          <select
            className="cursor-pointer"
            value={sortBy}
            onChange={(x) => setSortBy(x.target.value)}
          >
            <option value="id">Normal</option>
            <option value="name">Name</option>
            <option value="duration">duration</option>
          </select>
        </label>
        <label htmlFor="">
          <AlignVerticalSpaceAroundIcon className="m-auto" />
          <select
            className="cursor-pointer"
            value={orderBy}
            onChange={(x) => setOrderBy(x.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 bg-red-900 p-5 mx-20 rounded-xl">
        {filterData.map((data) => (
          <div className=" bg-slate-900 p-5 rounded-lg" key={data.id}>
            <div className="flex flex-col flex-wrap">
              <p className="m-3 font-black text-white text-center uppercase">
                {data.name}
              </p>
              <img className="w-32 h-32" src={data.image} alt="" />
              <p className="m-3 text-center bg-blue-300">
                {data.duration + " Minute"}
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={() => handleDelete(data)}>
                <Trash className="text-white" />
              </button>
              <button onClick={() => showInfo(data)}>
                <Info className="text-white" />
              </button>
              <button className="" onClick={() => setUpdateFilm(data)}>
                <SquarePen className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {updateFilm && (
        <div className="fixed z-10 inset-0 items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-3 w-1/2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              <label>Name Film : </label>
              <input
                className="border border-gray-300 p-2 mb-4 w-full"
                type="text"
                id="name"
                value={updateFilm.name}
                onChange={(e) =>
                  setUpdateFilm({ ...updateFilm, name: e.target.value })
                }
              />
              <label>duration : </label>
              <input
                className="border border-gray-300 p-2 mb-4 w-full"
                type="number"
                id="duration"
                value={updateFilm.duration}
                onChange={(e) =>
                  setUpdateFilm({
                    ...updateFilm,
                    duration: parseInt(e.target.value),
                  })
                }
              />
              <label>Image : </label>
              <input
                className="border border-gray-300 p-2 mb-4 w-full"
                type="text"
                id="image"
                value={updateFilm.image}
                onChange={(e) =>
                  setUpdateFilm({
                    ...updateFilm,
                    image: e.target.value,
                  })
                }
              />
              <button type="submit" className="rounded-md bg-green-400 p-2 m-3">
                Save
              </button>
              <button
                type="button"
                className="rounded-md bg-red-400 p-2 m-3"
                onClick={() => setUpdateFilm(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      {addFilm !=null && (
        <div className="fixed z-10 inset-0 items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-3 w-1/2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNewFilm();
              }}
            >
              <label>Name Film : </label>
              <input
                className="border border-gray-300 p-2 mb-4 w-full"
                type="text"
                id="name"
                value={addFilm.name}
                onChange={(e) =>
                  setAddFilm({ ...addFilm, name: e.target.value,})
                }
              />
              <label>duration : </label>
              <input
                className="border border-gray-300 p-2 mb-4 w-full"
                type="number"
                id="duration"
                value={addFilm.duration}
                onChange={(e) =>
                  setAddFilm({
                    ...addFilm,
                    duration: parseInt(e.target.value,),
                  })
                }
              />
              <label>Image : </label>
              <input
                className="border border-gray-300 p-2 mb-4 w-full"
                type="text"
                id="image"
                value={addFilm.image}
                onChange={(e) =>
                  setAddFilm({
                    ...addFilm,
                    image: e.target.value,
                  })
                }
              />
              <button type="submit" className="rounded-md bg-green-400 p-2 m-3">
                Save
              </button>
              <button
                type="button"
                className="rounded-md bg-red-400 p-2 m-3"
                onClick={() => setAddFilm(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
