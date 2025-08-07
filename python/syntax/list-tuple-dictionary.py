srk = ("RaOne", "Jawaan", "Pathaan", "Raees", "King")
print(srk)
print(srk[1])
print(srk[1], srk[2])
print(srk[3] [0:5:2])
print(srk[-1])
sallu = ("Kick", "Tubelight", "Bajrangi Bhaijaan", "Tiger")
print(sallu)
blockbuster, under_rated, all_time_great, great = sallu
print(blockbuster)
print(type(all_time_great))

og = srk + sallu
print(og)
if "king" in og:
    print("True")

# dictionay_name = {"key_name" : "value_name"}
tapri_chai = {"Masala Chai" : 10, "Adrak Chai": 10, "Masala - Adrak Chai": 15, "Tulsi Chai": 15, "Rose Chai": 30}
print(tapri_chai)
tapri_nashta = {"maska bun": 15, "parle-g": 5, "bada parle-g": 10, "simple paratha": 20}
print(tapri_nashta)
my_dict = {4:16}
print(my_dict)
my_emptyDict = {}
print(my_emptyDict)
x = my_dict[4]
print(x)
print(tapri_chai.keys())
print(tapri_nashta.values())
print(tapri_chai.items())
print(list(tapri_chai.items()))

# print(dictionary_name["key_name"])
# output: {value}
print(tapri_chai["Masala Chai"])

#another methid but orefer other this is not good
print(tapri_nashta.get("maska bun"))
print(tapri_nashta.get("Ginger"))

# update value of key
tapri_chai["Tulsi Chai"] = 20
print(tapri_chai)

#print all the keys
for nashta in tapri_nashta:
    print(nashta)

#print all the values with keys, values can only be accesed through keys
for chai in tapri_chai:
    print(chai, tapri_chai[chai])

#another way to print keys with values
for k, v in tapri_nashta.items():
    print(f"{k} is priced at {v}")

#add another key and value
tapri_chai["Gud Chai"] = 25
print(tapri_chai)

# remove key-value pair
tapri_chai.pop("Rose Chai")
print(tapri_chai)

IndianCricketTeam = {
    "Test": {"Gill" : "Batter", "Pant" : "Keeper-Batter", "Bumrah" : "Bowler"},
    "Odi": {"Kohli" : "Batter", "Rahul" : "Keeper-Batter", "Shami" : "Bowler"},
    "T20i": {"Jaiswal" : "Batter", "Sanju" : "Keeper-Better", "Siraj" : "Bowler"}
}
print(IndianCricketTeam["Odi"])
print(IndianCricketTeam["Odi"]["Kohli"])
