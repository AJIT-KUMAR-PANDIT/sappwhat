import React, { useState } from "react";

const people = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://picsum.photos/200",
    lastMessage: "Hello, how are you?",
    lastSeen: "2 hours ago",
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: "https://picsum.photos/200",
    lastMessage: "I am good, thanks",
    lastSeen: "1 hour ago",
  },
  {
    id: 3,
    name: "Bob Smith",
    avatar: "https://picsum.photos/200",
    lastMessage: "What is up?",
    lastSeen: "3 hours ago",
  },
  {
    id: 4,
    name: "Alice Johnson",
    avatar: "https://picsum.photos/200",
    lastMessage: "Not much",
    lastSeen: "4 hours ago",
  },
  {
    id: 5,
    name: "Mike Brown",
    avatar: "https://picsum.photos/200",
    lastMessage: "Hi",
    lastSeen: "5 hours ago",
  },
];

const PeopleList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[100vh] bg-gray-100 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Chats</h2>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-[100vw]  text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>
      <ul>
        {filteredPeople.map((person) => (
          <li
            key={person.id}
            className="flex items-center justify-between p-4 hover:bg-gray-200"
          >
            <div className="flex items-center">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.lastMessage}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{person.lastSeen}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
