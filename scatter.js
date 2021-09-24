d3.csv('cities.csv').then(function(data) {
    var data=filterEU(data);
    d3.select('.city-count').text("Number of cities: " + data.length);
    
    const width = 700;
    const height = 550;

    var svg = d3.select('.population-plot')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function(d){return d.x})
    .attr('cy', function(d){return d.y})
    .attr('r', function(d){
        if (d.population>=1000000){
            return '8px';
        }
        else{
            return '4px';
        }
    })
    .attr('fill', 'limegreen');

    var labels = d3.select('svg')
    .selectAll('title')
    .data(data)
    .enter()
    .append('text')
    .attr('x',function(d){return d.x})
    .attr('y', function(d){return d.y})
    .attr('text-anchor', 'middle')
    .attr('font-size','11px')
    .style('fill',"red")
    .attr('dy','20px')
    .text(function(d){
        if(d.population>=1000000){
            return d.country
        }
    });
    
  })


function filterEU(datum){

    return datum.filter(d=>d.eu=='true');



}