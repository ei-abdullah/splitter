import { useState } from "react";

export default function App() {
  return (
    <div className="bg-neutral-light-grayish-cyan h-screen flex flex-col items-center font-spaceMono">
      <div className="pt-16">
        <img src="/images/logo.svg" alt="splittter" />
      </div>
      <div className="pt-20 w-full ">
        <MainContainer />
      </div>
    </div>
  );
}

function MainContainer() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [selected, setSelected] = useState(0);

  let tipAmount = (bill * selected) / 100;

  function handleSelection(value) {
    setSelected(value);
  }

  function handleReset() {
    setBill("");
    setPeople("");
    setSelected(0);
    tipAmount = 0;
  }

  return (
    <div className="w-full bg-white rounded-t-2xl p-8 flex flex-col gap-6 lg:flex-row lg:w-fit lg:m-auto lg:rounded-2xl shadow-lg">
      <div className="lg:w-[32rem]">
        <div className="p-4">
          <p className="text-neutral-dark-grayish-cyan font-bold">Bill</p>
          <input
            type="text"
            className="w-full bg-neutral-light-grayish-cyan p-2 rounded-lg my-3 outline-none text-right font-bold pr-4"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>

        <div className="p-4">
          <p className="text-neutral-dark-grayish-cyan font-bold">
            Select Tip %
          </p>
          <Selection onSelection={handleSelection} />
        </div>

        <div className="p-4">
          <div className="flex justify-between">
            <p className="text-neutral-dark-grayish-cyan font-bold">
              Number of People
            </p>
            {people === 0 && (
              <p className="text-red-600 font-bold">Cannot be zero</p>
            )}
          </div>

          <input
            type="text"
            className="w-full bg-neutral-light-grayish-cyan p-2 rounded-lg my-3 outline-none text-right font-bold pr-4"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          />
        </div>
      </div>
      <TotalAmount
        bill={bill}
        people={people}
        tipAmount={tipAmount}
        onReset={handleReset}
      />
    </div>
  );
}

function Selection({ onSelection }) {
  return (
    <div className="flex justify-between flex-wrap gap-4 my-3">
      <PercentCard num={5} onSelection={onSelection} />
      <PercentCard num={10} onSelection={onSelection} />
      <PercentCard num={15} onSelection={onSelection} />
      <PercentCard num={25} onSelection={onSelection} />
      <PercentCard num={50} onSelection={onSelection} />
    </div>
  );
}

function PercentCard({ num, onSelection }) {
  return (
    <button
      onClick={() => {
        onSelection(num);
      }}
      className="w-52 py-3 bg-neutral-very-dark-cyan rounded-lg text-white font-bold text-xl"
    >
      {num}%
    </button>
  );
}

function TotalAmount({ bill, people, tipAmount, onReset }) {
  return (
    <div className="my-4 py-6 px-4 bg-neutral-very-dark-cyan rounded-2xl">
      <div className="lg:flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-end py-4">
            <div>
              <p className="text-white font-semibold text-lg">Tip Amount</p>
              <p className="text-neutral-dark-grayish-cyan font-semibold">
                / person
              </p>
            </div>
            <div>
              <p className="text-neutral-grayish-cyan font-bold text-4xl">
                ${people > 0 ? tipAmount / people : 0}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-end py-4">
            <div>
              <p className="text-white font-semibold text-lg">Total</p>
              <p className="text-neutral-dark-grayish-cyan font-semibold">
                / person
              </p>
            </div>
            <div>
              <p className="text-neutral-grayish-cyan font-bold text-4xl">
                ${people > 0 ? (tipAmount + bill) / people : bill}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onReset}
            className="w-72 py-3 rounded-lg bg-neutral-grayish-cyan"
          >
            <p className="text-center font-semibold text-neutral-very-dark-cyan text-2xl">
              RESET
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
