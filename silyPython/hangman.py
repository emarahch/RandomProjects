import random

options=["paper","dolphin","cow"]
inThere=[]
body=[]

word=random.choice(options)
inThere=[1]*len(word)
print(inThere)

# print(word)


def letterG():
 print()
 userInput=input("Type in a letter: ")
 if userInput in word:
    print("its in there")
    # finding All Indices of a Substring in a String
    indics=[index for index in range (len(word)) if word.startswith(userInput, index)]
    for i in indics:
     inThere[i]=userInput
    print(inThere)
    if 1 not in inThere:
        print("YOU WON!")
    else:
     letterG()


 else:
     print("OOPS not there")
     if len(body)<6:
      body.append("part")
      letterG()
     elif len(body)==6:
      print("You lost!")
     


letterG()
