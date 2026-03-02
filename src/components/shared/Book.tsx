
interface BookProps {
  imageUrl: string,
  BookName: string,
  Author: string
}

export default function Book({
  imageUrl,
  BookName,
  Author,
}: Readonly<BookProps>) {
  const hasImage = !!imageUrl;
  const hasName = !!BookName;
  const hasAuthor = !!Author;

  return (
    <div className="
      relative 
      w-45 
      bg-bginside 
      border-2 
      border-bgborder/30 
      rounded-2xl 
      p-3 
      cursor-pointer
      
      transition-all 
      duration-500 
      ease-out
      
      hover:border-bgborder/30 
      hover:-translate-y-2 
      hover:scale-[1.02] 
      hover:shadow-mistic
    ">
      {hasImage ? (
        <div className="w-full aspect-3/4 rounded-xl mb-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }} />
      ) : (
        <div className="w-full aspect-3/4 rounded-xl mb-4 bg-pulse  animate-pulse flex items-center justify-center">
          <span className="text-grimorium/25 text-2xl">✨</span>
        </div>
      )}
      {hasName ? (
        <h3 className="font-bold text-foreground">{BookName}</h3>
      ) : (
        <div className="h-4 w-3/4 bg-pulse rounded-md animate-pulse mb-2" />
      )}
      {hasAuthor ? (
        <p className="text-sm text-foreground/60">{Author}</p>
      ) : (
        <div className="h-3 w-1/2 bg-pulse rounded-md animate-pulse mt-2" />
      )}
    </div>
  );
}
