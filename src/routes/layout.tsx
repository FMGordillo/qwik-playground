import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer className="flex gap-8 h-14 justify-center place-items-center bg-indigo-100">
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
        <a href="https://github.com/FMGordillo" target="_blank">Modified by Facundo Martin Gordillo</a>
      </footer>
    </>
  );
});
