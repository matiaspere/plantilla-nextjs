import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { set } from "react-hook-form";
// import { DialogTrigger } from "@radix-ui/react-dialog";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(e) => {
        if (!e) {
          setIsOpen(e);
        }
      }}
    >
      <DialogTrigger
        asChild
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Button>Subir PDF</Button>
      </DialogTrigger>

      <DialogContent>
        ejemplo
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
