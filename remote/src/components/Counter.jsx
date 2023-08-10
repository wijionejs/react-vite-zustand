import { create } from "zustand";

const useBearStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const Counter = () => {
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  return <div>
    <div>Bears: {bears}</div>
    <div>
      <button onClick={increasePopulation}>+1 bear</button>
      <button onClick={removeAllBears}>Reset bears</button>
    </div>
  </div>

}

export default Counter;