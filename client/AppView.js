var AppView = Backbone.View.extend({
	initialize: function(){
		$('.horns').on('click', this.hornsGet);
		$('.post').on('click', this.postGet);
		$('.midScreen').on('click', this.screenGet);
		$('.reset').on('click', this.reset);
		this.render();
		$('.PG').on('click', function(){
			$('.Steph').toggleClass('hider')
		});
		$('.SG').on('click', function(){
			$('.Klay').toggleClass('hider')
		});
		$('.SF').on('click', function(){
			$('.Iggy').toggleClass('hider')
		});
		$('.PF').on('click', function(){
			$('.Dray').toggleClass('hider')
		});
		$('.C').on('click', function(){
			$('.Bogs').toggleClass('hider')
		});

	},

	render: function(){
		$('.container').empty();
		var arr = [[ '75px', '325px','125px', '125px', 'img/Steph.png', 'PG'], 
		['555px', '375px', '80px', '80px', 'img/Klay.png', 'SG'],
		['450px', '360px', '70px', '70px', 'img/Iggy.png', 'SF'],
		['175px', '350px','100px', '100px', 'img/Draymond4.png', 'PF'], 
		['300px', '360px', '80px', '80px','img/Bogut.png', 'C']];

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
		   .attr('xlink:href', function(d){return d[4]} );

		$('.container').append('<img class="hider Steph" width=700px src=img/CurryShot.jpg></img>',
			'<img class="hider Klay" width=700px src=img/KlayShot.jpg></img>',
			'<img class="hider Iggy" width=700px src=img/IggyShot.jpg></img>',
			'<img class="hider Dray" width=700px src=img/DrayShot.jpg></img>',
			'<img class="hider Bogs" width=700px src=img/BogutShot.jpg></img>')
	},

	hornsGet: function(){
		$.ajax({
			url: 'http://localhost:1337/horns',
			type: 'GET',
			contentType: 'application/json',
			success: function(data){
				var stuff = JSON.parse(data);
				d3.selectAll('image')
				.data(stuff.results)
				.transition().duration(1500)
				.attr('x', function(d){return d[0]})
				.attr('y', function(d){return d[1]})
			},
			error: function(){
				console.error("Couldn't get your stuff!")
			}
		});
	},

	postGet: function(){
		$.ajax({
			url: 'http://localhost:1337/post',
			type: 'GET',
			contentType: 'application/json',
			success: function(data){
				var stuff = JSON.parse(data);
				d3.selectAll('image')
				.data(stuff.results)
				.transition().duration(1500)
				.attr('x', function(d){return d[0]})
				.attr('y', function(d){return d[1]})
			},
			error: function(){
				console.error("Couldn't get your stuff!")
			}
		});
	},

	screenGet: function(){
		$.ajax({
			url: 'http://localhost:1337/screen',
			type: 'GET',
			contentType: 'application/json',
			success: function(data){
				var stuff = JSON.parse(data);
				d3.selectAll('image')
				.data(stuff.results)
				.transition().duration(1500)
				.attr('x', function(d){return d[0]})
				.attr('y', function(d){return d[1]});
 				
 			// 	setTimeout(function(){d3.select('.Steph')
				// .transition().duration(1500)
				// .attr('x', '300px')}, 2000);
			},
			error: function(){
				console.error("Couldn't get your stuff!")
			}
		});
	},

	reset: function(){
		var arr = [[ '75px', '325px'], 
		['555px', '375px'],
		['450px', '360px'],
		['175px', '350px'], 
		['300px', '360px']];
		d3.selectAll('image')
		  .data(arr)
		  .transition().duration(1500)
		  .attr('x', function(d){return d[0]})
		  .attr('y', function(d){return d[1]});


	}
});