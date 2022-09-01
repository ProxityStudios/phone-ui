export function check(n: number) {
   return n.toString().length <= 1;
}

export function parseTime(date: Date): string {
   const parsedHours = check(date.getHours())
      ? `0${date.getHours()}`
      : date.getHours();
   const parsedMinutes = check(date.getMinutes())
      ? `0${date.getMinutes()}`
      : date.getMinutes();
   const time = `${parsedHours}:${parsedMinutes}`;
   return time;
}
