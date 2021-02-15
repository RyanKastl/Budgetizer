
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
    
    dataItems = {}

    for line in lines:
        data = {}
        parts = line.split("=")
        data['name'] = parts[0]
        data['value'] = parts[1].strip()
        data['type'] = 'None'
        dataItems[parts[0]] = data

    return dataItems

def addData(field, value, path):

    f = open(path, "a")
    f.write(field + "=" + str(value) + "\n")
    f.close()
    return

def deleteData(field, path):

    f = open(path, "r")
    lines = f.readlines()
    f.close()

    f = open(path, "w+")
    for line in lines:
        if (line.find(field) == -1):
            f.write(line)
    f.close()

    return True