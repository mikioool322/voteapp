	
	let player = Math.floor(Math.random()*2)+1;
	let map = [[0,0,0],[0,0,0],[0,0,0]]
	let idArray = [];
	let isPlayable = true;
	
	function setDefault() {
		for(let i = 0; i < idArray.length; i++)
		{
			document.getElementById(idArray[i]).innerHTML = "";			
		}
		player = Math.floor(Math.random()*2)+1;
		map = [[0,0,0],[0,0,0],[0,0,0]]
		idArray = [];
		document.getElementById("winner").innerHTML = "";
		isPlayable = true;
		showPlayer();
	}
	
	function showPlayer() {
		if(player == 1)
		{
			document.getElementById("player").innerHTML = 'Player O move';
		}
		else if(player == 2)		
		{
			document.getElementById("player").innerHTML = 'Player X move';
		}
	}
	
	showPlayer();
	
	function change(id) {
		
		if(isPlayable)
			{
			if(!(idArray.includes(id)))
			{
				if(player == 1)
				{								
					document.getElementById(id).innerHTML = "<img src='o.png' width='99' height='99'>";
					document.getElementById("player").innerHTML = 'Player X move';
					player = 2;
					map[id.charAt(0)][id.charAt(1)] = 1
					idArray.push(id);
				}
				else
				{				
					document.getElementById(id).innerHTML = "<img src='x.png' width='99' height='99'>";
					document.getElementById("player").innerHTML = 'Player O move';
					player = 1;
					map[id.charAt(0)][id.charAt(1)] = 2
					idArray.push(id);
				}
			}				
				if(win() == 1)
				{
					document.getElementById("winner").innerHTML = "Player O wins!";
					isPlayable = false;
				} 
				else if(win() == 2)
				{
					document.getElementById("winner").innerHTML = "Player X wins!";
					isPlayable = false;				
				}
				else if(idArray.length >= 9)
				{
					document.getElementById("winner").innerHTML = "Draw!";
					isPlayable = false;
				}
			}	
	}
	
	function win() {
		
		winner = 0;
		if(map[0][0] == 1 && map[0][1] == 1 && map [0][2] == 1) winner = 1;
		if(map[1][0] == 1 && map[1][1] == 1 && map [1][2] == 1) winner = 1;
		if(map[2][0] == 1 && map[2][1] == 1 && map [2][2] == 1) winner = 1;
		if(map[0][0] == 1 && map[1][0] == 1 && map [2][0] == 1) winner = 1;
		if(map[0][1] == 1 && map[1][1] == 1 && map [2][1] == 1) winner = 1;
		if(map[0][2] == 1 && map[1][2] == 1 && map [2][2] == 1) winner = 1;
		if(map[0][0] == 1 && map[1][1] == 1 && map [2][2] == 1) winner = 1;
		if(map[0][2] == 1 && map[1][1] == 1 && map [2][0] == 1) winner = 1;
		
		if(map[0][0] == 2 && map[0][1] == 2 && map [0][2] == 2) winner = 2;
		if(map[1][0] == 2 && map[1][1] == 2 && map [1][2] == 2) winner = 2;
		if(map[2][0] == 2 && map[2][1] == 2 && map [2][2] == 2) winner = 2;
		if(map[0][0] == 2 && map[1][0] == 2 && map [2][0] == 2) winner = 2;
		if(map[0][1] == 2 && map[1][1] == 2 && map [2][1] == 2) winner = 2;
		if(map[0][2] == 2 && map[1][2] == 2 && map [2][2] == 2) winner = 2;
		if(map[0][0] == 2 && map[1][1] == 2 && map [2][2] == 2) winner = 2;
		if(map[0][2] == 2 && map[1][1] == 2 && map [2][0] == 2) winner = 2;
		
		return winner;
	}		
