d3.csv('buildings.csv').then(function(data) {
    var data=data.sort(function(a,b){
        return b.height_ft-a.height_ft;
    });
    const width = 500;
    const height = 500;
    const barpad=3;
    const padding=40;
    const barheight=40



    var svg =d3.select('#num1')
    .append('svg')
    .attr('width',width)
    .attr('height', height);
    
    let bars = svg.selectAll('rect')
    .data(data)
    .enter()
    .append('g');

    bars.append('text')
    .attr('x', 0)
    .attr('y',function(d,i){
        return (barheight+barpad)*i;
    })
    .text(function(d){
        return d.building;
    })
    .attr('dy','25px')
    .attr('text-anchor', 'start')
    .attr('font-family','cambria')
    .style('fill',"red");

    bars.append('rect')
    .attr('x', 228)
    .attr('y',function(d,i){
        return (barheight+barpad)*i;
    })
    .attr('width',function(d){
        console.log(d.height_ft)
        return d.height_ft/10;
    })
    .attr('height', barheight)
    .attr('fill','orange')
    .on('click',(e,d)=>{
        d3.select('.image').attr('src', d.image)
        d3.select('.building-name').text(d.building);
        d3.select('.height').text(d.height_ft);
        d3.select('.city').text(d.city);
        d3.select('.country').text(d.country);
        d3.select('.floors').text(d.floors);
        d3.select('.completed').text(d.completed);
    });

    bars.append('text')
    .attr('x', function(d){
        return 170 +(d.height_ft/10);
    })
    .attr('y',function(d,i){
        return (barheight+barpad)*i;
    })
    .text(function(d){
        return d.height_ft + " ft";
    })
    .attr('dy','25px')
    .attr('font-family','cambria')
    .attr('fill','white');
    

})
