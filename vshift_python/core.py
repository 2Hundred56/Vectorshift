import math

class Vector:
    def __init__(self,x,y):
        self.x = x
        self.y = y

    def __str__(self):
        return "(%f, %f)"%(self.x,self.y)

    @property
    def magnitude(self):
        return math.sqrt(self.x**2+self.y**2)

    @magnitude.setter
    def magnitude(self,newMag):
        oldMag = self.magnitude
        self.x /= oldMag
        self.y /= oldMag

    def clone(self):
        return Vector(self.x,self.y)

    def normalized(self):
        newVector = self.clone()
        newVector.magnitude = 1
        return newVector

    # I partially stole this code from Ethan because I was lazy

    def __add__(self, other):
        return Vector(self.x+other.x, self.y+other.y)
    def __sub__(self, other):
        return Vector(self.x-other.x, self.y-other.y)
    def __mul__(self, other):
        return Vector(self.x*other, self.y*other)
    def __div__(self, other):
        return Vector(self.x/other, self.y/other)

# Also stolen from Ethan

def dot(vector1, vector2):
    return vector1.x*vector2.x+vector1.y*vector2.y
def angle(vector1, vector2):
    norm1=vector1.normalizedd()
    norm2=vector2.normalize()
    return math.acos(dot(norm1, norm2))
