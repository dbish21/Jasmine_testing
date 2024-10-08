"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        """Initialize the generator with a starting number."""
        self.start = self.next = start

    def generate(self):
        """Generate the next serial number."""
        result = self.next
        self.next += 1
        return result

    def reset(self):
        """Reset the generator to the initial starting number."""
        self.next = self.start

# Add this at the end of the file
# testing the code
if __name__ == "__main__":
    import doctest
    doctest.testmod()

