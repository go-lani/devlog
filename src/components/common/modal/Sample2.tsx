interface Props {
  closeModal?: () => void;
}

export default function Sample2({ closeModal }: Props) {
  return (
    <div className="absolute left-[50%] h-full w-[300px] translate-x-[-50%] bg-white">
      <button type="button" onClick={closeModal}>
        close!
      </button>
      <p>Hello I&apos;m Sample2</p>
      <div className="h-[50vh] bg-slate-600" />
      <div className="h-[50vh] bg-slate-500" />
      <div className="h-[50vh] bg-slate-400" />
    </div>
  );
}
