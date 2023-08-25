interface Props {
  closeModal?: () => void;
}

export default function Sample3({ closeModal }: Props) {
  return (
    <div className="py-50 absolute left-[150px] top-[150px] h-[300px] w-[300px] bg-white">
      <button type="button" onClick={closeModal}>
        close!
      </button>
      <p>Hello I&apos;m Sample3</p>
    </div>
  );
}
