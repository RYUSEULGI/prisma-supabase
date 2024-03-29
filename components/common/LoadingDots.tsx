import clsx from 'clsx';

const dots = 'mx-[1px] inline-block h-1 w-1 animate-blink rounded-md';

export default function LoadingDots() {
  return (
    <span className="mx-2 inline-flex items-center">
      <span className={clsx(dots, 'bg-white')} />
      <span className={clsx(dots, 'animation-delay-[200ms]', 'bg-white')} />
      <span className={clsx(dots, 'animation-delay-[400ms]', 'bg-white')} />
    </span>
  );
}
