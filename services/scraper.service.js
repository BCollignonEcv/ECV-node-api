'use strict';
const cheerio = require("cheerio");
const axios = require('axios');


module.exports = class Scraper {
    jobs;
    scrapedData;

    constructor(req, source) {
        this.source = source;
        this.jobs;
        this.scrapedData;
        this.url = generateUrl(source, req);
        this.dataMapping = generateDataMapping(source);
    }

    async scrape() {
        this.scrapedData = await executeScraper(this.url);

        if (this.scrapedData) {
            this.scrapedData = cleanScrapedData(this.scrapedData);
            this.jobs = generateJobsObject(this.dataMapping, this.scrapedData);
            return this.jobs;
        }
    };
}


const executeScraper = async (url) => {
    return axios.get(url).then((response) => {
        return response.data;
    }).catch((err) => {
        return err;
    });
}

function generateJobsObject(dataMapping, scrapedData){
    const $ = cheerio.load(scrapedData);
    let jobs = [];
    $(dataMapping.container.tag).each((index, element) => {
        let job = {};
        Object.keys(dataMapping).forEach((key) => {
            // return if attribute should not be exported
            if('export' in dataMapping[key] && !dataMapping[key].export){
                return;
            }
            job[key] = $(element).find(dataMapping[key].tag).text();
        })
        jobs.push(job);
    });
    if(jobs.length > 0){
        return jobs;
    }else{
        return {
            error : true,
            content : $.html()
        }
    }
}

function generateUrl(source, req){
    let a = `http://api.scraperapi.com?api_key=5f238e1d49f1722de4d6d749aeba038d&url=${source.baseUrl}?${source.search}=${req.body.search}&${source.location}=${req.body.location}`;
    return a;
}

function generateDataMapping(source){
    let a = {
        container : {
            tag: source.jobOfferTag,
            export : false
        },
        title: {
            tag: source.titleTag
        },
        company: {
            tag: source.companyTag
        },
        salary: {
            tag: source.salaryTag
        },
    }
    return a;
}

function cleanScrapedData(scrapedData){
    // scrapedData = scrapedData.replace(/(\r\n|\n|\r)/gm, "");
    // scrapedData = scrapedData.replace(/\"/g, '"');
    return scrapedData;
}