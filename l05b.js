let svg = d3.select("#div1").append("svg")


svg.attr("width", 400)
  .attr("height", 400)


let dataArray = [3,7,10,39,3,5,26,1,23,12]


let rects = svg.selectAll("rect").data(dataArray)

rects.enter().append("rect")
  .attr("x", (d,i) => 40*i)
  .attr("y", (d) => 400 - 10*d)
  .attr("width", 40)
  .attr("height", (d) => 10*d)
  .style("fill", "yellow")
  .style("stroke", "black")


let dataArray2 = [2,3,5,7,11]

let rects2 = svg.selectAll("rect").data(dataArray2)

rects2
  .transition()
  .delay(3000)
  .duration(3000)
  .attr("y", (d) => 400 - 10*d)
  .attr("height", (d) => 10*d)

//remove the rectangles that are no longer mapped
//rects2.exit().remove()
