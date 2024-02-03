type LocalMath = {
  double(): void;
};

export const math: LocalMath = {
  double(this: { val: number }) {
    this.val *= 2;
  },
};

//alternatively
export const math2: LocalMath & ThisType<{ value: number }> = {
  double() {
    this.val *= 2;
  },
};

// latch val to const math
const obj = { val: 1, ...math };
obj.double();

const obj2 = { donkey: 1, ...math2 };
obj2.double();

// usage
type StateDesc<D, M> = {
  data: D;
  methods: M & ThisType<D & M>;
};

function createState<D, M>(desc: StateDesc<D, M>): D & M {
  return { ...desc.data, ...desc.methods };
}

let state = createState({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});

state.x = 10;
state.y = 20;
state.moveBy(5, 5);
