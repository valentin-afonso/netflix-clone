import { NextResponse } from "next/server";

export async function GET(request: any) {
  // const id = request.query.id;
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.IMDB_BEARER}`,
    },
  };
  // 866398
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.IMDB_KEY}&languege=en-US`,
    options
  );
  const data = await res.json();

  // return Response.json({ data });
  return NextResponse.json({ data });
}
