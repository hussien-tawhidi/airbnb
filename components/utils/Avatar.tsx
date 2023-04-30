import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      height={30}
      width={30}
      alt='avatar'
      src='/images/placeholder.jpg'
      className='rounded-full'
    />
  );
}
