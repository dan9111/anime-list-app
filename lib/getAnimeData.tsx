type Repository = {
    mal_id: number,
    title: string,
}

export default async function getAnimeData() {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=One Piece&limit=20`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data = res.json()
    return data;
}
