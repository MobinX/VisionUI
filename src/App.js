import React from "react";

export const App = () => {
  return (
    <div class="">
      <div class="m-4">
        <button class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">secondary</button>
        <button class="btn btn-accent">accent</button>
      </div>

      <div class="m-4" data-theme="valentine">
        <button class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">secondary</button>
        <button class="btn btn-accent">accent</button>
      </div>

      <div class="m-4 tabs">
        <button class="tab tab-lifted">Tab 1</button>
        <button class="tab tab-lifted tab-active">Tab 2</button>
        <button class="tab tab-lifted">Tab 3</button>
      </div>

      <div class="m-4">
        <input type="checkbox" class="toggle toggle-primary" />
        <input type="checkbox" class="toggle toggle-secondary" />
        <input type="checkbox" class="toggle toggle-accent" />
      </div>

      <div class="card shadow-2xl  m-4">
        <figure>
          <img src="https://picsum.photos/id/1005/500/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">DaisyUI Card</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus.
          </p>
        </div>
      </div>

      <div class="dropdown m-4">
        <div tabindex="0" class="m-1 btn">
          Dropdown
        </div>
        <ul
          tabindex="0"
          class="p-2 menu dropdown-content bg-neutral text-neutral-content rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      <label for="my-modal" class="btn modal-button">
        Modal
      </label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <p>
            Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
            adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
            quasi eligendi. Saepe velit autem minima.
          </p>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>

      <ul class="steps my-4 w-full">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>

      <div class="avatar offline m-10">
        <div class="rounded-full w-24 h-24">
          <img
            src="http://daisyui.com/tailwind-css-component-profile-2@94w.png"
            alt="avater"
          />
        </div>
      </div>

      <div class="card-container m-20 relative w-80">
        <div class="card w-80 relative  bg-neutral shadow-2xl z-0 m-4">
          <div class="card-body">
            <div class="flex flex-row space-x-1">
              <h1 class="text-neutral-content font-bold">Please</h1>
              <h1 class="text-neutral-content">login</h1>
            </div>
            <div class="float-input-container border-base-100 group my-3">
              <input
                class="float-input  "
                placeholder="Email"
                type="text"
                name="email"
              />
              <label for="email" class="float-input-lebel hidden z-0">
                Email
              </label>
              <button class="input-left-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="float-input-container border-base-100 group my-3">
              <input
                class="float-input placeholder-neutral-content focus:placeholder-opacity-0 "
                placeholder="Email"
                type="text"
                name="email"
              />
              <label for="email" class="float-input-lebel hidden z-0">
                Email
              </label>
              <button class="btn btn-xs w-9 h-10 btn-disabled text-opacity-100  absolute top-0 right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-sm btn-circle absolute -top-4 right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="btn btn-primary btn-sm absolute -bottom-4 right-5 rounded-2xl">
          Login{" "}
        </button>
      </div>
    </div>
  );
};
