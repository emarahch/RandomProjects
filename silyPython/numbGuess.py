import random


randomNumb=random.randrange(1,100)
print(randomNumb)


def inputter():
 userGuess=input("Guess the number? ")
 userGuess=int(userGuess)
 verify(userGuess)

def verify(userGuess):
 if userGuess==randomNumb:
   print("You got it babe!")
 elif userGuess<randomNumb:
   print("Too low...try again")
   inputter()
 elif userGuess>randomNumb:
   print("Too High...try again")
   inputter()

inputter()





