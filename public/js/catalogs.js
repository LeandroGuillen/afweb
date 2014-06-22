var catalogAlignment =	[	"Legal Good",
							"Legal Neutral",
							"Legal Evil",
							"Neutral Good",
							"True Neutral",
							"Neutral Evil",
							"Chaotic Good",
							"Chaotic Neutral",
							"Chaotic Evil"
						];

var catalogRaces =		[{	raceName				:	"human",
							abilitiesAdjustment		:	{},
							skillsAdjustment		:	{}, 
							preferredClass			:	"",
							minWeight				:	"60",
							maxWeight				:	"115",
							minHeight				:	"150",
							maxHeight				:	"190",
							baseSpeed				:	"30",
							raceSize				:	"medium"
						},
						{	raceName				:	"elf",
							abilitiesAdjustment		:	{DEX:"2",CON:"-2"}, 
							skillsAdjustment		:	{spot:"2",search:"2",listen:"2"}, 
							preferredClass			:	"mage",
							minWeight				:	"40",
							maxWeight				:	"65",
							minHeight				:	"130",
							maxHeight				:	"170",
							baseSpeed				:	"30",
							raceSize				:	"medium"
						},
						{	raceName				:	"dwarf",
							abilitiesAdjustment		:	{CON:"2",CHA:"-2"}, 
							skillsAdjustment		:	{search:"2",craft:"2"}, 
							preferredClass			:	"warrior",
							minWeight				:	"60",
							maxWeight				:	"115",
							minHeight				:	"120",
							maxHeight				:	"140",
							baseSpeed				:	"20",
							raceSize				:	"medium"
						},
						{	raceName				:	"gnome",
							abilitiesAdjustment		:	{CON:"2",STR:"-2"}, 
							skillsAdjustment		:	{listen:"2",craft:"2"}, 
							preferredClass			:	"bard",
							minWeight				:	"18",
							maxWeight				:	"20",
							minHeight				:	"90",
							maxHeight				:	"105",
							baseSpeed				:	"20",
							raceSize				:	"small"
						},
						{	raceName				:	"halfling",
							abilitiesAdjustment		:	{DEX:"2",STR:"-2"}, 
							skillsAdjustment		:	{silentmove:"2",jump:"2",climb:"2",listen:"2"}, 
							preferredClass			:	"rogue",
							minWeight				:	"12",
							maxWeight				:	"15",
							minHeight				:	"75",
							maxHeight				:	"90",
							baseSpeed				:	"20",
							raceSize				:	"small"
						},
						{	raceName				:	"half-elf",
							abilitiesAdjustment		:	{}, 
							skillsAdjustment		:	{spot:"2",search:"2",listen:"2",diplomacy:"2",gather:"2"}, 
							preferredClass			:	"",
							minWeight				:	"40",
							maxWeight				:	"80",
							minHeight				:	"150",
							maxHeight				:	"190",
							baseSpeed				:	"30",
							raceSize				:	"medium"
						},
						{	raceName				:	"half-orc",
							abilitiesAdjustment		:	{STR:"2",INT:"-2",CHA:"-2"}, 
							skillsAdjustment		:	{}, 
							preferredClass			:	"",
							minWeight				:	"90",
							maxWeight				:	"115",
							minHeight				:	"180",
							maxHeight				:	"210",
							baseSpeed				:	"30",
							raceSize				:	"medium"
						}];

var catalogSize =		{	Fine		:	"8",
							Diminutive	:	"4",
							Tiny		:	"2",
							Small		:	"1",
							Medium		:	"0",
							Large		:	"-1",
							Huge		:	"-2",
							Gargantuan	:	"-4",
							Colossal	:	"-8"
						}