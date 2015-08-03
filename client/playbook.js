// start slingin' some d3 here.

//Define the SVG

var enemyLength = 15;

var enemyArray = [];

var highScore = 0;

var colissions = 0;

var arr = [[ '150px', '220px','125px', '125px', 'img/Steph.png', 'Steph'], 
['300px', '90px','100px', '100px', 'img/Draymond4.png', 'Draymond'], 
['175px', '175px', '75px', '75px', 'img/Delly.png', 'Delly'],
 ['325px', '10px', '90px', '90px', 'img/Lebron.png', 'Bron']]

var svg = d3.select('.container').append('svg')
  .attr('width', '700px')
  .attr('height', '450px');

svg.selectAll('image')
   .data(arr)
   .enter()
   .append('image')
   .attr('class', function(d){return d[5]})
   .attr('width', function(d){return d[2]})
   .attr('height', function(d){return d[3]})
   .attr('x', function(d){return d[0]})
   .attr('y', function(d){return d[1]})
   .attr('xlink:href', function(d){return d[4]} )



d3.select('.pick').on('click', function(){
  d3.select('svg')
    .select('.Draymond')
    .transition().duration(1500)
    .attr('y', '200px')

  d3.select('svg')
    .select('.Steph')
    .transition().duration(2500)
    .attr('x', '400px')

  d3.select('svg')
    .select('.Delly')
    .transition().duration(2500)
    .attr('x', '275px')
    .attr('y', '225px')

  d3.select('svg')
    .select('.Bron')
    .transition().duration(2500)
    .attr('y', '62px')
})

d3.select('.roll').on('click', function(){
  d3.select('svg')
    .select('.Draymond')
    .transition().duration(1500)
    .attr('y', '10px')
    .attr('x', '250px')

  d3.select('svg')
    .select('.Steph')
    .transition().duration(1500)
    .attr('x', '350px')
    .attr('y', '5px')

  d3.select('svg')
    .select('.Delly')
    .transition().duration(3000)
    .attr('y', '150px')
    .attr('x', '375px')
  
  d3.select('svg')
    .select('.Bron')
    .transition().duration(1500)
    .attr('y', '25px')
  })

d3.select('.ice').on('click', function(){
   d3.select('svg')
    .select('.Draymond')
    .transition().duration(1500)
    .attr('y', '200px')

  d3.select('svg')
    .select('.Delly')
    .transition().duration(1500)
    .attr('x', '250px')
    .attr('y', '200px')

  d3.select('svg')
    .select('.Bron')
    .transition().duration(1500)
    .attr('x', '200px')
    .attr('y', '45px')

  d3.select('svg')
    .select('.Steph')
    .transition().duration(2500)
    .attr('y', '125px')
})

d3.select('.hedge').on('click', function(){
  d3.select('svg')
    .select('.Bron')
    .transition().duration(1500)
    .attr('x', '400px')
    .attr('y', '175px')

    d3.select('svg')
    .select('.Draymond')
    .transition().delay(1500).duration(1500)
    .attr('y', '10px')
    .attr('x', '250px')

    d3.select('svg')
    .select('.Bron')
    .transition().delay(1500).duration(1500)
    .attr('y', '25px')
    .attr('x', '325px')

    d3.select('svg')
    .select('.Delly')
    .transition().delay(1500).duration(1750)
    .attr('x', '400px')
    .attr('y', '165px')
})

d3.select('.blitz').on('click', function(){
  d3.select('svg')
    .select('.Bron')
    .transition().duration(1500)
    .attr('x', '400px')
    .attr('y', '175px')

    d3.select('svg')
    .select('.Draymond')
    .transition().delay(1500).duration(1500)
    .attr('y', '10px')
    .attr('x', '250px')

    d3.select('svg')
    .select('.Delly')
    .transition().delay(1500).duration(1750)
    .attr('x', '350px')
    .attr('y', '215px')
})

d3.select('.switch').on('click', function(){
  d3.select('svg')
    .select('.Bron')
    .transition().duration(1500)
    .attr('x', '400px')
    .attr('y', '175px')

  d3.select('svg')
    .select('.Draymond')
    .transition().delay(1500).duration(1500)
    .attr('y', '10px')
    .attr('x', '250px')

  d3.select('svg')
    .select('.Delly')
    .transition().delay(1500).duration(1600)
    .attr('y', '35px')
    .attr('x', '310px')


})

d3.select('.SoMuchPower').on('click', function(){
  d3.select('svg').remove()

  d3.select('.container').selectAll('image')
   .data([['15px', '15px', 'img/Jordan.gif'], ['15px', '15px', 'img/Steph.gif'], ['15px', '15px', 'img/Bron.gif']])
   .enter()
   .append('image')
   .attr('x', function(d){return d[0]})
   .attr('y', function(d){return d[1]})
   .attr('xlink:href', function(d){return d[2]} )
})



