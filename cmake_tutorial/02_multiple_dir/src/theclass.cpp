
#include <theclass.h>

TheClass::TheClass(int init)
  : m_val(init)
{
}

void TheClass::incVal()
{
  ++m_val;
}

int TheClass::getVal()
{
  return m_val;
}
