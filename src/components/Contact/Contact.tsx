import React from "react";

function Contact() {
  return (
    <div className="w-full h-full pt-14 pb-8">
      <section className="w-1/2 h-full">
        <div className="p-10 min-w-full h-full rounded-2xl bg-(--card-bg) backdrop-blur-xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <h2 className="text-2xl">Send a message</h2>

          <form
            className="mt-8 flex flex-col text-(--text-secondary) text-lg!"
            action=""
          >
            <label className="mb-2" htmlFor="">
              Your name
            </label>
            <input
              placeholder="Juan Dela Cruz"
              className="bg-(--card-border)/50 px-4 w-full h-12 border rounded-xl border-(--accent-primary)/20 focus:border-(--accent-primary)/50 outline-none text-(--text-primary)"
              type="text"
            />

            <label className="mt-4 mb-2" htmlFor="">
              Your email
            </label>
            <input
              placeholder="juan@example.com"
              className="px-4 w-full h-12 border rounded-xl border-(--accent-primary)/20 bg-(--card-border)/50 focus:border-(--accent-primary)/50 outline-none text-(--text-primary)"
              type="text"
            />

            <label className="mt-4 mb-2" htmlFor="">
              Your message
            </label>
            <textarea
              className="p-4 w-full h-48 resize-none border rounded-xl border-(--accent-primary)/20 bg-(--card-border)/50 text-(--text-primary) focus:border-(--accent-primary)/50 outline-none"
              placeholder="Tell me about your project or opportunity ... "
            ></textarea>
          </form>

          
        </div>
      </section>

      <section className="w-1/2"></section>
    </div>
  );
}

export default Contact;
