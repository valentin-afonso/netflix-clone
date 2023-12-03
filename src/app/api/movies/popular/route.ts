import axios, { AxiosRequestConfig } from 'axios';
// import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer xxx'
        }
      };


    try {
        /*
        const response = await axios.get(URL, {
          params: params,
          headers: headers,
        });
        console.log(response.data);
        */

         const response = await axios.request(options);
        // const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key')
        // return res.json()
        
        
        // return NextResponse.json({message: "OK", response}, {status: 200})
        return new Response(JSON.stringify({message: "OK", response}))
    } catch (err) {
        return new Response(JSON.stringify({message: "Error", err}))
        // return NextResponse.json({message: "Error", err}, {status: 500})
    }
}