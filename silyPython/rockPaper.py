from multiprocessing import RLock, parent_process
import random

# 1=rock
# 2=paper
# 3=scissors

options=[1,2,3]

computerPick=random.choice(options)
print(computerPick)

userPick=int(input("1.Rock 2.Paper 3.Scissors "))

def computingScore():
 if computerPick == userPick:
  print("It's a tie")
 elif computerPick == 1 and userPick==2:
    print("YOU WON")
 elif userPick== 1 and computerPick==2:
    print("computer won")
 elif computerPick == 1 and userPick==3:
    print("YOU WON")
 elif userPick== 3 and computerPick==1:
    print("computer won")

# etc etc etc...
computingScore()
# Rock beats scissors
# paper beats rock
# scissor beats paper

