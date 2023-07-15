type Repository = {
    data: [{
      title: string,
      title_japanese: string,
      title_english: string,
      mal_id: number,
      images: {
          jpg: {
              image_url: string
          }
      },
      status: string,
      genres: [{
          name: string
      }],
      studios: [{
          name: string
      }],
      favorites: number,
      score: number,
  }]
}

export default async function SearchDropDown() {

    let dropdown = false

    return (
        <>
            {dropdown ? <div className="absolute w-full mt-1 p-2 bg-slate-900 shadow-lg rounded-bl rounded-br max-h-45 overflow-y-auto">
                waduh
        </div> : <></>}
        </>
        
    )
}