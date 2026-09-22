import profile from "../../assets/photo.jpg"

export function ProfileImage() {
  return (
    <div className="flex flex-col w-auto justify-center gap-2">

      <div className="relative w-100">
        <div className="absolute bg-linear-to-b from-primary via-primary/40 to-background opacity-50 -z-1 scale-103 w-full h-full rounded-4xl"></div>
        <img src={profile} alt="personal photo" className="rounded-4xl" />
        
        <div className="absolute backdrop-blur-sm bg-linear-to-b from-background/30 to-background bottom-0 h-auto w-full p-3 text-left">
          <p className="text-primary font-bold">Desarrollador web</p>
          <p className="text-xl font-semibold">David Ezequiel Tolosa Cabalero</p>
        </div>
      </div>
    </div>
  )
}