import { info } from "@tauri-apps/plugin-log";
import mockArticles from "../mocks/articles.json";
import mockExplore from "../mocks/explore.json";
import { fetch } from '@tauri-apps/plugin-http';


export default function useArticles() {
    function getArticles() {
        return mockArticles.items;
    }

    function getArticle(id :number) {
        return mockArticles.items[id];
      }

    function getExploreArticles() {
        return mockExplore;
    }


    async function fetchArticles() {

    
        try {
            const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40fadamakis", {
                method: "GET",
            });
            return await res.json();
        } catch (error) {
            info("Error fetching articles:" + JSON.stringify(error) );
            throw error;
        }
    }

    return { getArticles, getExploreArticles, fetchArticles,getArticle };
}
