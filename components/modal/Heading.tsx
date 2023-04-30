import { HeadingModal } from "@/types";

export default function Heading({ title, subTitle, center }: HeadingModal) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h5 className='text-2xl font-bold'>{title}</h5>
      <p className='font-light text-neutral-500 mt-2'>{subTitle}</p>
    </div>
  );
}
