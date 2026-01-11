function Iot() {
  return (
    <div className="h-full w-full flex">
      <section className="w-1/2 h-full">
        <h2 className="text-3xl text-center sticky top-18 mt-16">
          Internet of Things (IoT)
        </h2>
      </section>

      <section className="w-1/2 h-full p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring) flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2>Microcontroller</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">ESP8266</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">ESP32</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Sensors</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">MLX90614</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">MQ4</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">MQ 137</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">DHT11</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">Water flow sensor</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <p className="text-lg">Relay</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Iot;
