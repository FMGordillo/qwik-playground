import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section className="container mx-auto lg:px-40 px-8">
      <section className="flex flex-col justify-center py-20 prose mx-auto lg:prose-h1:xl p:prose-p:l">
        <h1 className="mb-2">Welcome to my website</h1>
        <p className="mt-2">
          Learning the benefits of using Qwik, by doing Qwik
        </p>
      </section>
      <section className="grid grid-cols-3 gap-8 justify-center prose mx-auto">
        <section>
          <h2>{">"} Easy</h2>
          <p>
            This should be easy to read, understand and replicate. If you need
            help{" "}
            <a
              href="https://github.com/FMGordillo/qwik-playground/issues"
              target="_blank"
            >
              you can contact me
            </a>
            !
          </p>
        </section>
        <section>
          <h2>{">"} Basic</h2>
          <p>
            If you don't know how to read this project, you might want to
            revisit the <a href="https://roadmap.sh">Learning Path</a>
          </p>
        </section>
        <section>
          <h2>{">"} Deployable</h2>
          <p>
            You can check{" "}
            <a
              href="https://github.com/FMGordillo/qwik-playground"
              target="_blank"
            >
              my repository
            </a>{" "}
            and you'll see that you can deploy it in{" "}
            <a href="https://pages.cloudflare.com/" target="_blank">
              {" "}
              Cloudflare Pages
            </a>
          </p>
        </section>
      </section>{" "}
      <section className="flex flex-col justify-center text-center py-20 prose mx-auto lg:prose-h1:xl p:prose-p:l">
        <h1>What are you waiting for?</h1>
        <a href="https://qwik.builder.io/" target="_blank">
          <button className="self-center px-4 border-4 border-indigo-300 w-max hover:bg-indigo-400 hover:text-white transition">
            Start learning Qwik
          </button>
        </a>
      </section>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
