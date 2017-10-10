var job = {
	"headline": "Gridium Front-end Developer",
	"essentials": {
		"locations": "denver",
		"employment": EmploymentType().Permanent,
		"experience": [ExperienceLevels().Junior, ExperienceLevels().Seasoned],
		"startdate": (new Date()).getTime(),
		"companysize": CompanySize().TenToTwenty,
		"teamsize": {
			"min": 1,
			"max": 6
		},
	},
	"methodology": {
		"codereviews": true,
		"prototyping": true,
		"failfast": true,
		"unittests": true,
		"integrationtests": true,
		"buildserver": BuildServers().CircleCI,
		"staticcodeanalysis": CodeAnalysisTools().NotYetChosen,
		"versioncontrol": VersionControlSystem().Git,
		"issuetracker": IssueTrackers().Tikkit,
		"standups": true,
		"quickstart": true,
		"commitondayone": true,
	},
	"specs": {
		"workload": 1.0,
		"workweek": 40,
		"schedule": ScheduleOptions().Flexible,
		"remote": RemoteWorking().Required,
		"pto": PTO().Unlimited
	},
	"profile": {
		"newfeatures": 50,
		"clientsupport": 9,
		"documentation": 10,
		"maintenance": 30,
		"meetings": 1,
	},
	"equipment": {
		"operatingsystem": [OperationSystems().MacOSX, OperationSystems().CentOS],
		"computer": MachineType().Laptop,
	},
	"technologies": {
		"css3": Level().Good,
		"html5": Level().Good,
		"javascript": Level().Good,
		"node": Level().Good,
		"rest": Level().Good,
		"uiux": Level().Familiar,
		"design": Level().Familiar,
		"testing": {
			"oneof": {
				"junit": Level().Good,
				"mocha": Level().Good,
				"jasmine": Level().Good,
				"selenium": Level().Good,
			}
		},
		"framework": {
			"oneof": {
				"react": Level().Familiar,
				"vue": Level().Familiar,
				"angular": Level().Familiar,
			}
		},
		"boardgames": Level().Familiar,
	},
	"other": [
		"we love technology",
		"we solve interesting problems"
	]
};

function EmploymentType() {
	return enumerate("Permanent", "Temporary", "Project");
}

function ExperienceLevels() {
	return enumerate("Junior", "Seasoned", "Lead", "GrayBeard");
}

function CompanySize() {
	return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred");
}

function VersionControlSystem() {
	return enumerate("NotYetChosen", "Git", "BitBucket");
}

function IssueTrackers() {
	return enumerate("NotYetChosen", "GitHub", "Jira", "Tikkit");
}

function BuildServers() {
	return enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship", "CircleCI");
}

function CodeAnalysisTools() {
	return enumerate("NotYetChosen", "ESLint");
}

function KnowledgeRepos() {
	return enumerate("NotYetChosen", "GitHubWiki", "Confluence");
}

function TravelOptions() {
	return enumerate("None", "Possible", "Plentiful");
}

function ScheduleOptions() {
	return enumerate("Fixed", "Flexible");
}

function RemoteWorking() {
	return enumerate("No", "Negotiable", "Required");
}

function RelocationPackages() {
	return enumerate("Nonealse", "Negotiable");
}

function OperationSystems() {
	return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows");
}

function MachineType() {
	return enumerate("Workstation", "Laptop");
}

function Monitors() {
	return enumerate("Negotiable");
}

function Level() {
	return enumerate("Familiar", "Good", "Expert");
}

function TrainingType() {
	return enumerate("None", "Informal", "Formal", "External");
}

function PTO() {
	return enumerate("Accrued", "Unlimited")
}

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() {
	v = arguments;
	s = {
		all: [],
		keys: v
	};
	for (i = v.length; i--;) s[v[i]] = s.all[i] = v[i];
	return s
};