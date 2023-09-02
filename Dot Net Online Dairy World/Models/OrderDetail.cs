using System;
using System.Collections.Generic;

namespace OnlineDairyWorld2.Models;

public partial class OrderDetail
{
    public int Id { get; set; }

    public double Amount { get; set; }

    public string OrderItem { get; set; } = null!;

    public int Quantity { get; set; }

    public int? FarmerId { get; set; }

    public int OrderId { get; set; }

    public virtual Farmer? Farmer { get; set; }

    public virtual Order Order { get; set; } = null!;
}
