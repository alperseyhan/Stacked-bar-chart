import * as d3 from 'd3';

// Data preparation
const data = [
    { name: "Ex1", E: 0.627906977, S: 0.23255814, G: 0.139534884 },
    { name: "Ex2", E: 0.23255814, S: 0.627906977, G: 0.139534884 },
    { name: "Ex3", E: 0.6875, S: 0.1875, G: 0.125 },
    { name: "Ex4", E: 0.627906977, S: 0.139534884, G: 0.23255814 },
    { name: "Ex5", E: 0.578947368, S: 0.315789474, G: 0.105263158 },
    { name: "Ex6", E: 0.117647059, S: 0.235294118, G: 0.647058824 },
    { name: "Ex7", E: 0.26, S: 0.64, G: 0.1 },
    { name: "Ex8", E: 0.703703704, S: 0.185185185, G: 0.111111111 },
    { name: "Ex9", E: 0.153846154, S: 0.307692308, G: 0.538461538 },
    { name: "Ex10", E: 0.125, S: 0.25, G: 0.625 },
    { name: "Ex11", E: 0.7, S: 0.2, G: 0.1 },
    { name: "Ex12", E: 0.627906977, S: 0.23255814, G: 0.139534884 },
    { name: "Ex13", E: 0.125, S: 0.25, G: 0.625 },
    { name: "Ex14", E: 0.3125, S: 0.5625, G: 0.125 },
    { name: "Ex15", E: 0.627906977, S: 0.23255814, G: 0.139534884 },
    { name: "Ex16", E: 0.647058824, S: 0.235294118, G: 0.117647059 },
    { name: "Ex17", E: 0.125, S: 0.65, G: 0.225 },
    { name: "Ex18", E: 0.654545455, S: 0.254545455, G: 0.090909091 },
    { name: "Ex19", E: 0.203703704, S: 0.685185185, G: 0.111111111 },
    { name: "Ex20", E: 0.642857143, S: 0.25, G: 0.107142857 },
    { name: "Ex21", E: 0.23255814, S: 0.627906977, G: 0.139534884 },
    { name: "Ex22", E: 0.105263158, S: 0.315789474, G: 0.578947368 },
    { name: "Ex23", E: 0.660377358, S: 0.188679245, G: 0.150943396 },
    { name: "Ex24", E: 0.139534884, S: 0.23255814, G: 0.627906977 },
    { name: "Ex25", E: 0.625, S: 0.25, G: 0.125 },
    { name: "Ex26", E: 0.6875, S: 0.1875, G: 0.125 }
];

// Set the dimensions and margins of the graph
const margin = {top: 40, right: 100, bottom: 40, left: 60};
const width = 960 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

// Create SVG container
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Define color scale for the categories
const color = d3.scaleOrdinal()
    .domain(["E", "S", "G"])
    .range(["#98D8BF", "#A5A6F6", "#FFC5C5"]);

// Create stack generator
const stack = d3.stack()
    .keys(["E", "S", "G"])
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetExpand);

// Calculate the stacked data
const series = stack(data);

// Create scales
const x = d3.scaleLinear()
    .domain([0, 1])  // For normalized data
    .range([0, width]);

const y = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, height])
    .padding(0.1);

// Add X axis
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format(".0%")))
    .append("text")
    .attr("class", "axis-label")
    .attr("x", width/2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .text("Percentage");

// Add Y axis
svg.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("y", -45)
    .attr("x", -height/2)
    .attr("text-anchor", "middle")
    .text("Experts");

// Create the bars and add text
svg.append("g")
    .selectAll("g")
    .data(series)
    .join("g")
    .attr("fill", d => color(d.key))
    .each(function(d) {
        const selection = d3.select(this);
        
        // Create rectangles (bars)
        selection.selectAll("rect")
            .data(d)
            .join("rect")
            .attr("x", d => x(d[0]))
            .attr("y", d => y(d.data.name))
            .attr("width", d => x(d[1]) - x(d[0]))
            .attr("height", y.bandwidth());
        
        // Add text in the middle of each bar segment
        selection.selectAll("text")
            .data(d)
            .join("text")
            .attr("x", d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
            .attr("y", d => y(d.data.name) + y.bandwidth() / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .attr("fill", "black")
            .attr("font-size", "10px")
            .text(d => {
                const width = x(d[1]) - x(d[0]);
                const value = d[1] - d[0];  // remove percentage
                // Only show text if the bar is wide enough
                return width > 40 ? `(${value.toFixed(3)})` : "";
            });
    });

// Add legend
const legend = svg.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "start")
    .selectAll("g")
    .data(["E", "S", "G"])
    .join("g")
    .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 10})`);

// Add colored rectangles to legend
legend.append("rect")
    .attr("x", 0)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", color);

// Add text to legend
legend.append("text")
    .attr("x", 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(d => d);
