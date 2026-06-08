# print("Hello World")

# if 5>2:
#     print("5 is bigger than 2")
# else:
#     print("2 is smaller than 5")



# name = "pratap"
# print(type(name))

# list = [1,23,4]
# tuple = (1,2,34)
# set = {1,2,3}
# dict = {"name": "pratap", "age": 25}


# print(list[0])
# print(tuple[2])
# print(dict["name"])

# for num in list:
#     print(num)

# list.append(5)
# list.remove(list[0])


# print("\nAfter modifications:")

# for num in list:
#     print(num)



# print("python Slicing")

# nums = [1,2,4,5,6]

# print(nums[1:])    

# print(nums[-1:-3:-1])


# squares = []

# for x in range(5):
#     squares.append(x * x)



# print(squares)


evens = [x for x in range(10) if x % 2 == 0]
print(evens)

name = "pratap"
age = 25

print(f"Name is {name} and  Age is {age}")


price = 99.3435

print(f"price is {price:.2f}")


# if age >= 18:
#     print("adult")
# elif age >=13:
#     print("teen")
# else:
#     print("child")
    

# count =0
# while count<5:
#     print(count)
#     count +=1


def greet(name):
    return f"Hello {name}"


print(greet("jerry"))