def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end."""
    if command == "remove":
        if location == "beginning":
            return lst.pop(0) if lst else None
        elif location == "end":
            return lst.pop() if lst else None
    elif command == "add":
        if location == "beginning":
            lst.insert(0, value)
            return lst
        elif location == "end":
            lst.append(value)
            return lst
    return None
