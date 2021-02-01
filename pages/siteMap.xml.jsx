import axios from "axios";
import React from "react";

// http://service.sehiyye.az/sitemap.xml
class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    // await axios.get("[WARNING!!! ENTER YOUR XML FILE URL]").then((result) => {
    //   console.log(result.data);
    //   res.write(`${result.data}`);
    //   return result;
    // });
    // [ WARNING!!! OR TRY THIS /commet axios] 
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    http://service.sehiyye.az/sitemap.xml
    </urlset>`)
    res.end();
  }
}
export default Sitemap;
