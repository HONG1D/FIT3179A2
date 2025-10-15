// Disable the Vega lite action button
const options = {"actions": false};

// Section 1
vegaEmbed('#map', 'malaysia_tourism_map.vg.json', options);
vegaEmbed('#scatter', 'malaysia_tourism_scatterplot.vg.json', options);

// Section 2
vegaEmbed('#heatmap', 'malaysia_tourism_heatmap.vg.json', options);
vegaEmbed('#grouped-bar', 'malaysia_tourism_grouped_diverging_bar.vg.json', options);
vegaEmbed('#filter-bar', 'malaysia_tourism_filter_diverging_bar.vg.json', options);

// Section 3
vegaEmbed('#trend', 'malaysia_tourism_grouped_line_bar_chart.vg.json', options);
