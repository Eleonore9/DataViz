import csv

def print_pres():
	with open('USPresident-Wikipedia-URLs-Thumbs-HS.csv', 'rb') as csvfile:
		reader = csv.reader(csvfile, delimiter=',', quotechar='|')
		counter = 0
		to_print = []
		for row in reader:
			if counter > 0:
				a = row[1] + ' (' + row[5] + ')'
				to_print.append(a)
			counter += 1
		return to_print

#print print_pres()
