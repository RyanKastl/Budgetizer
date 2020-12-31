
def setData(field, value, path):

    f = open(path, "r")
    lines = f.readlines()
    f.close()

    f = open(path, "w+")
    for line in lines:
        if (line.find(field) != -1):
            f.write(field + "=" + str(value) + "\n")
        else:
            f.write(line)
    f.close()

    return True

def getData(path):

    f = open(path, "r")
    lines = f.readlines() 
    f.close()

    data = {}

    for line in lines:
        parts = line.split("=")
        data[parts[0]] = parts[1].strip()

    return data

def addData(field, value, path):

    f = open(path, "a")
    f.write(field + "=" + str(value) + "\n")
    f.close()
    return

def deleteData(field, value, path):

    f = open(path, "r")
    lines = f.readlines()
    f.close()

    f = open(path, "w+")
    for line in lines:
        if (line.find(field) == -1):
            f.write(line)
    f.close()

    return True