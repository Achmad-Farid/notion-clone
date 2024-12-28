import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

function Sidebar() {
  const menuOption = (
    <>
      <NewDocumentButton></NewDocumentButton>

      {/* my documet */}
      {/* list */}

      {/* shared with me */}
      {/* list */}
    </>
  );
  return (
    <div className="p-2 md:p-5 relative bg-gray-200">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={40} className="p-2 hover:opacity-30 rounded-lg"></MenuIcon>
          </SheetTrigger>
          <SheetContent side="left" className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              {menuOption}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:inline">{menuOption}</div>
    </div>
  );
}
export default Sidebar;
