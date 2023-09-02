using System;
using System.Collections.Generic;

namespace OnlineDairyWorld2.Models;

public partial class Farmer
{
    public int FarmerId { get; set; }

    public string? Address { get; set; }

    public string? Email { get; set; }

    public string? Firstname { get; set; }

    public string? Lastname { get; set; }

    public string? PhoneNo { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual ICollection<StockDetail> StockDetails { get; set; } = new List<StockDetail>();
}
