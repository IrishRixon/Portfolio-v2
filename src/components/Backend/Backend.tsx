import React from "react";

function Backend() {
  return (
    <div className="h-full w-full flex">
      <section className="w-1/2 h-full">
        <h2 className="text-3xl text-center sticky top-18 mt-16">Backend Development</h2>
      </section>

      <section className="w-1/2 h-full p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring) flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2>Languages & Runtime</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\nodejs.png"
                alt="nodejs logo"
              />
              <p className="text-lg">Node.js</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\php.png"
                alt="php logo"
              />
              <p className="text-lg">PHP</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Frameworks & Libraries</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\express.png"
                alt="express logo"
              />
              <p className="text-lg">Express</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\socket.png"
                alt="socket logo"
              />
              <p className="text-lg">Socket.io</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Databases</h2>

          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\mongodb.png"
                alt="mongodb logo"
              />
              <p className="text-lg">MongoDB</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\sqlite.png"
                alt="sqlite logo"
              />
              <p className="text-lg">SQLite3</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain rounded"
                src="\logos\mysql.png"
                alt="mysql logo"
              />
              <p className="text-lg">MySql</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Communication concepts</h2>

          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\websocket.png"
                alt="websocket logo"
              />
              <p className="text-lg">Websockets</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\rest.png"
                alt="rest logo"
              />
              <p className="text-lg">REST API</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Authentication & Security</h2>

          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\jwt.png"
                alt="jwt logo"
              />
              <p className="text-lg">JWT Authentication</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\bcrypt.png"
                alt="bcrypt logo"
              />
              <p className="text-lg">Bcrypt Password Hashing</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Backend;
