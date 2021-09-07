let svg = d3.select("#div1").append("svg")


svg.attr("width", 400)
  .attr("height", 400)



for (let i=0; i<10; i++) {
  let varC = svg.append("circle")
  
  varC.attr("cx", () => 100 + Math.random()*300)
  varC.attr("cy", function() {
    return 100 + Math.random()*300;
  })
  varC.attr("r", 25)
  varC.style("fill", "red")
}


let circs = d3.selectAll("circle")
circs = circs.transition().duration(5000).attr("r", 50).style("fill", "blue")
